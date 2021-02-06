import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Barbershop from './Barbershop';
import User from './User';

@Entity('orders')
export default class Order {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  schedule: String;

  @Column()
  total: Number;

  @Column()
  date: String;

  @ManyToOne(() => User, user => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Barbershop, barbershop => barbershop.orders)
  @JoinColumn({ name: 'barbershop_id' })
  barbershop: Barbershop;
}