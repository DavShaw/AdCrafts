import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Prompt } from 'src/prompts/entities/prompt.entity';

@Entity('outputs')
export class Output {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  msg: string;

  @Column('int')
  tokencost: number;

  @Column('datetime')
  date: Date;

  @OneToMany(() => Prompt, prompt => prompt.output)
  prompts: Prompt[];
}
