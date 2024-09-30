import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('usersettings')
export class UserSetting {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userSettings)
  @JoinColumn({ name: 'userid' })
  user: User;

  @Column()
  language: string;

  @Column()
  timezone: string;

  @Column()
  theme: string;

  @Column('datetime')
  createdat: Date;
}
