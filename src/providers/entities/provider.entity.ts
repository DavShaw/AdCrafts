import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('providers')
export class Provider {
  @PrimaryGeneratedColumn('increment', { type: 'tinyint' })
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => User, user => user.provider)
  users: User[];
}
