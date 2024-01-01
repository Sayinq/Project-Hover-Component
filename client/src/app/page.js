'use client'
import styles from './page.module.css';
import { useState } from 'react';
import Project from '../app/components/project';
import Modal from '../app/components/modal';

import yamoStudios from '../app/images/yamo-studios.jpg';

const projects = [
  {
    title: "Yamo Studios",
    src: "yamo-studios.jpg",
    color: "#060612",
  },
  {
    title: "Omega Strikers",
    src: 'OmegaStrikers.jpg',
    color: "#C44F79",
  },
  {
    title: "Blizzard",
    src: 'Blizzard_Redesign.jpg',
    color: "#148CEE",
  },
  {
    title: "Personal",
    src: 'Personal_Page.png',
    color: "#d2d2d2",
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <main className="flex h-screen items-center justify-center">
      <div className={styles.body}>
        {
          projects.map( (project, index) => {
            return <Project key={index} index={index} title={project.title} setModal=
            {setModal} />
          })
        }
      </div>
      <Modal modal={modal} projects={projects}/>
    </main>
  )
}
