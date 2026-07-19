import tailwindcssicon from "@/components/assets/tech/Tailwind CSS.png";
import typescript from "@/components/assets/tech/TypeScript.png";
import shadcn from "@/components/assets/tech/shadcn-ui.png";
import ionic from "@/components/assets/tech/Ionic.png";
import tanstack from "@/components/assets/tech/tanstack.png";
import nodejs from "@/components/assets/tech/Node.js.png";
import expressjs from "@/components/assets/tech/Express.png";
import laravel from "@/components/assets/tech/Laravel.png";
import django from "@/components/assets/tech/Django.png";
import mysql from "@/components/assets/tech/MySQL.png";
import sqlite from "@/components/assets/tech/SQLite.png";
import postgresql from "@/components/assets/tech/PostgresSQL.png";
import vite from "@/components/assets/tech/Vite.js.png";
import vscode from "@/components/assets/tech/Visual Studio Code.png";
import git from "@/components/assets/tech/Git.png";
import github from "@/components/assets/tech/GitHub.png";
import postman from "@/components/assets/tech/Postman.png";
import konva from "@/components/assets/tech/konva.png";
import supabase from "@/components/assets/tech/supabase.png";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

type IconProps = React.HTMLAttributes<SVGElement>;
type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

const icons = {
  tailwindcssicon: (props: ImgProps) => (
    <img src={tailwindcssicon} alt="tailwindcssicon" {...props} />
  ),
  typescript: (props: ImgProps) => (
    <img src={typescript} alt="typescript" {...props} />
  ),
  shadcn: (props: ImgProps) => <img src={shadcn} alt="shadcn" {...props} />,
  ionic: (props: ImgProps) => <img src={ionic} alt="ionic" {...props} />,
  tanstack: (props: ImgProps) => (
    <img src={tanstack} alt="tanstack" {...props} />
  ),
  nodejs: (props: ImgProps) => <img src={nodejs} alt="nodejs" {...props} />,
  expressjs: (props: ImgProps) => (
    <img src={expressjs} alt="expressjs" {...props} />
  ),
  laravel: (props: ImgProps) => <img src={laravel} alt="laravel" {...props} />,
  django: (props: ImgProps) => <img src={django} alt="django" {...props} />,
  mysql: (props: ImgProps) => <img src={mysql} alt="mysql" {...props} />,
  postgresql: (props: ImgProps) => (
    <img src={postgresql} alt="postgresql" {...props} />
  ),
  sqlite: (props: ImgProps) => <img src={sqlite} alt="sqlite" {...props} />,

  vite: (props: ImgProps) => <img src={vite} alt="vite" {...props} />,
  git: (props: ImgProps) => <img src={git} alt="git" {...props} />,
  github: (props: ImgProps) => <img src={github} alt="github" {...props} />,
  postman: (props: ImgProps) => <img src={postman} alt="postman" {...props} />,
  vscode: (props: ImgProps) => <img src={vscode} alt="vscode" {...props} />,
  konva: (props: ImgProps) => <img src={konva} alt="konva" {...props} />,
  supabase: (props: ImgProps) => (
    <img src={supabase} alt="supabase" {...props} />
  ),
};

export const Icons: IconsType = icons;
