import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserPurchase } from 'src/userpurchases/entities/userpurchase.entity';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn('increment', { type: 'tinyint' })
  id: number;

  @Column()
  name: string;

  @Column('real')
  price: number;

  @OneToMany(() => UserPurchase, userPurchase => userPurchase.plan)
  userPurchases: UserPurchase[];
}
