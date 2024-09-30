import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Provider } from 'src/providers/entities/provider.entity';
import { UserPurchase } from 'src/userpurchases/entities/userpurchase.entity';
import { Prompt } from 'src/prompts/entities/prompt.entity';
import { UserSetting } from 'src/usersettings/entities/usersetting.entity';

@Entity('users')
export class User {
  @PrimaryColumn()
  username: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => Provider, provider => provider.users)
  @JoinColumn({ name: 'providerid' })
  provider: Provider;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  displayname: string;

  @OneToMany(() => UserPurchase, userPurchase => userPurchase.user)
  userPurchases: UserPurchase[];

  @OneToMany(() => Prompt, prompt => prompt.user)
  prompts: Prompt[];

  @OneToMany(() => UserSetting, userSetting => userSetting.user)
  userSettings: UserSetting[];
}
