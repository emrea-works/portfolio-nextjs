import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';

/* 
 * Skill sebzesi bir template olabilir, yani bir şablon, 
 * maske gibi, içini veri ile doldurabildiğimiz
 * @title<prop>: Yeteneğin (Skill) başlığıdır
 */
const Skill = ({ title, src }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={src} width='64px' height='64px' alt={title} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

/*
 * Skill şablonunun içini dolduracağımız veri tabanını burada girebiliriz
 * Skills isimli component bir tür motor, Skill şablonunu alıyor, 
 * girdiğimiz veri sayısı kadar döngü ile her bir şablonun içini 
 * burada belirlediğimiz veriyle dolduruyor ve ekrana yansıtıyor. 
 * @skillsList<object-array>: json türünde bir minik veritabanı
 */
const skillsList = [
  { id: 0, title: 'HTML',       src: Html }, 
  { id: 1, title: 'CSS',        src: Css },
  { id: 2, title: 'JavaScript', src: Javascript },
  { id: 3, title: 'React',      src: ReactImg },
  { id: 4, title: 'Github',     src: Github },
];

const Skills = () => {  
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {/* Skill şablonunu bir döngü ile otomatik olarak ekrana dökelim */}
          {skillsList.map( (skill) => {
            return <Skill key={skill.id} title={skill.title} src={skill.src} />
          })}

        </div>
      </div>
    </div>
  );
};

export default Skills;
