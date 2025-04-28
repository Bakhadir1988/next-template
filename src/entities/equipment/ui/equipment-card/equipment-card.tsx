'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import noPhoto from '@/shared/assets/test.png';
import { Button } from '@/shared/ui/button';

import { Equipment } from '../../model/types';
import styles from './equipment-card.module.css';

interface Props {
  equipment: Equipment;
  isActive: boolean;
  onClick: () => void;
}

export const EquipmentCard = ({ equipment, isActive, onClick }: Props) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
    >
      <div className={styles.grid}>
        <div onClick={onClick} className={styles.title}>
          <span>{equipment.name}</span>
          <span>{equipment.id}</span>
        </div>
        {isActive && (
          <motion.div className={styles.content}>
            <Image
              src={noPhoto}
              alt="Описание изображения"
              width={500}
              height={300}
            />
            <span className="base_subtitle">
              Техническое обслуживание ломовозов
            </span>
            <p>
              Ломовозы предназначены для подъёма, погрузки и перевозки
              промышленных и бытовых отходов.
            </p>
            <p>
              Мастера грузового сервиса «Ремзонасервис» имеют 10-летний опыт
              работы с грузовиками, оборудованными мультилифтом.
            </p>
            <Button variant="primary">Подробнее</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
