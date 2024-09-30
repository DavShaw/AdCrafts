import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Prompt } from 'src/prompts/entities/prompt.entity';

@Entity('chats')
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryid' })
  category: Category;

  @OneToMany(() => Prompt, prompt => prompt.chat)
  prompts: Prompt[];
}
