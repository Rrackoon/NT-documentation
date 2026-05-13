import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Требования и цели',
    image: 'img/pnt.png',
    description: (
      <>
        В одном месте собраны бизнес-требования, use cases,
        нефункциональные требования и версия MVP для NutriTrack.
      </>
    ),
  },
  {
    title: 'Архитектура и модели',
    image: 'img/ppnt.png',
    description: (
      <>
        Документация описывает доменную модель, логику хранения,
        polyglot persistence, BPMN, Event Storming и архитектурные решения.
      </>
    ),
  },
  {
    title: 'API и артефакты',
    image: 'img/rpnt.png',
    description: (
      <>
        Подключены OpenAPI через Redocusaurus, PlantUML для диаграмм
        и Draw.io для редактируемых схем прямо внутри сайта.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={image}
          className={styles.featureSvg}
          alt={title}
        />
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}