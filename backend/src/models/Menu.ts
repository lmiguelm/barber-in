import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Barbershop from './Barbershop';

@Entity('menu')
export default class Menu {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  name: String;

  @Column()
  price: Number;

  @ManyToOne(() => Barbershop, barbershop => barbershop.menus)
  @JoinColumn({ name: 'barbershop_id' })
  barbershop: Barbershop;
}