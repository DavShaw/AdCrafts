import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Plan } from 'src/plans/entities/plan.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('userpurchases')
export class UserPurchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userPurchases)
  @JoinColumn({ name: 'userid' })
  user: User;

  @ManyToOne(() => Plan)
  @JoinColumn({ name: 'planid' })
  plan: Plan;

  @Column('real')
  price: number;

  @Column('datetime')
  date: Date;
}
