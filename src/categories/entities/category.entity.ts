import { Chat } from 'src/chats/entities/chat.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('increment', { type: 'tinyint' })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Chat, chat => chat.category)
  chats: Chat[];
}
