import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Barbershop from './Barbershop';

@Entity('schedules')
export default class Schedule {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  schedule: String;

  @ManyToOne(() => Barbershop, barbershop => barbershop.schedules)
  @JoinColumn({ name: 'barbershop_id' })
  barbershop: Barbershop;
}