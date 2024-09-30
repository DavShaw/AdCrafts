import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Chat } from 'src/chats/entities/chat.entity';
import { Output } from 'src/outputs/entities/output.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('prompts')
export class Prompt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chat, chat => chat.prompts)
  @JoinColumn({ name: 'chatid' })
  chat: Chat;

  @ManyToOne(() => Output)
  @JoinColumn({ name: 'outputid' })
  output: Output;

  @ManyToOne(() => User, user => user.prompts)
  @JoinColumn({ name: 'userid' })
  user: User;

  @Column()
  msg: string;

  @Column('datetime')
  date: Date;

  @Column('int')
  tokenbefore: number;

  @Column('int')
  tokenafter: number;

  @Column('int')
  tokencost: number;
}
