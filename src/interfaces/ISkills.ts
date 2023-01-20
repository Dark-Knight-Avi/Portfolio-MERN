interface Language {
  lang: string;
  lang_prof: number;
}
interface Tool {
  tool: string;
  tool_prof: number;
}
interface Fnl {
  fnl: string;
  fnl_prof: number;
}
interface Tech {
  tech: string;
  tech_prof: number;
}

export default interface ISkills {
  languages: Language[];
  tools: Tool[];
  fnl: Fnl[];
  techs: Tech[];
  techSkillProf: string[];
  hobbies: string[];
}
