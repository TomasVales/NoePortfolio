import React, { useState } from 'react';
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  HeartHandshake, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  Brain, 
  ChevronRight, 
  BookOpen, 
  Languages, 
  FileText 
} from 'lucide-react';

// --- DATOS COMPLETOS DEL CV ---
const DATA = {
  nombre: "Dra. Noelia Altamirano",
  titulo: "Médica Especialista en Pediatría",
  subtitulo: "Pediatría • Terapia Intensiva Infantil • Alta Complejidad",
  matricula: "MP 11111 | MN 22222", 
  contacto: {
    telefono: "15-6365-7651",
    email: "noula26.4@hotmail.com",
    direccion: "Quilmes, Buenos Aires",
    nacimiento: "26 de Abril 1976"
  },
  perfil: "Médica de planta con sólida formación académica y humana. Me caracterizo por ser responsable, empática, servicial y dedicada. Busco constantemente la prosperidad académica y la excelencia en el trabajo en equipo, manteniendo siempre una actitud honesta en mi labor.",
  
  experiencia: [
    {
      rol: "Médica de Planta",
      lugar: "Hospital de Alta Complejidad El Cruce",
      periodo: "Nov 2012 - Actualidad",
      desc: "Desempeño en institución de referencia (36hs semanales). Atención de alta complejidad y trabajo interdisciplinario."
    },
    {
      rol: "Consultorio Particular",
      lugar: "Atención Privada",
      periodo: "2022 - Actualidad",
      desc: "Atención personalizada cuatro tardes por semana. Seguimiento integral de pacientes."
    },
    {
      rol: "Guardia y Consultorios Externos",
      lugar: "Clínica del Niño de Quilmes",
      periodo: "2006 - 2023",
      desc: "Amplia experiencia en urgencias pediátricas y atención ambulatoria durante 17 años."
    },
    {
      rol: "Consultorio",
      lugar: "Consultorio Niños de Quilmes",
      periodo: "2021 - 2023",
      desc: "Atención pediátrica general."
    },
    {
      rol: "Guardia Externa",
      lugar: "Sanatorio Trinidad de Quilmes",
      periodo: "2012 - 2013",
      desc: "Atención de urgencias en guardia externa."
    }
  ],
  
  formacion: [
    {
      titulo: "Curso Superior Anual de Dermatología Pediátrica",
      institucion: "Hospital de Niños Ricardo Gutiérrez (HNRG)",
      year: "2024"
    },
    {
      titulo: "Especialista en Clínica Pediátrica",
      institucion: "Curso Superior de Pediatría (Colegio de Médicos II / Min. Salud)",
      year: "2012 - 2014"
    },
    {
      titulo: "Postbásica de Terapia Intensiva Pediátrica",
      institucion: "Sociedad Argentina de Terapia Intensiva (S.A.T.I)",
      year: "2010 - 2011",
      nota: "Cursado Completo (Examen Final Pendiente)"
    },
    {
      titulo: "Residencia Completa de Pediatría",
      institucion: "Clínica del Niño / La Familia de Quilmes",
      year: "2007 - 2010",
      nota: "Aval del Colegio de Médicos II de Avellaneda"
    },
    {
      titulo: "Médica",
      institucion: "Universidad Nacional de La Plata (U.N.L.P)",
      year: "1995 - 2004"
    }
  ],

  cursosCategorizados: {
    "Dermatología Infantil": [
      "XXXII Curso Superior Anual de Dermatología - H.N.R.G (2024)", 
      "Curso Superior Anual de Dermatología Infantil - Hospital Gutiérrez (2023)",
      "XVIII Jornada de Dermatología en lenguaje pediátrico (Marzo 2023)"
    ],
    "Adolescencia y Prevención (SAP)": [
      "Curso de Prevención del Suicidio Adolescente - SAP (2021)",
      "Curso de Prevención de Obesidad en Niños y Adolescentes - SAP (Mayo 2021)",
      "Curso de Prevención del Embarazo en la Adolescencia - SAP (Julio 2021)"
    ],
    "Cuidados Críticos y Emergencias": [
      "Curso de Recuperación Cardiovascular Pediátrica (Ago-Dic 2015)",
      "Curso PFCCS - Fundamental Critical Care Support (2011 y 2013)",
      "Curso PALS (Soporte Vital Avanzado Pediátrico) (Mayo)",
      "Atención Básica Inicial del Paciente Quemado (Ago 2011)",
      "Curso de Fundamentos de Cuidados Intensivos Iniciales (2008)",
      "22° Congreso Argentino de Terapia Intensiva (Sept 2012)"
    ],
    "Oncología y Cuidados Especiales": [
      "Soporte Clínico del Paciente Oncológico Pediátrico (Ago-Nov 2018)",
      "Capacitación en Soporte Clínico Oncológico (Jun-Oct 2017)",
      "2° Curso de Neurología Infantil: Tecnología al servicio de la clínica (2016)"
    ],
    "Actualización Pediátrica General": [
      "Programa Nacional de Actualización Pediátrica (250hs, 2016-2017)",
      "2° Curso Anual de Actualizaciones en Pediatría (Abr-Nov 2018)",
      "3° Curso de Actualización: De la consulta al diagnóstico (2012)",
      "Congreso Internacional de Infectología (Abril 2017)",
      "Curso Crecimiento y Problemas de Crecimiento (Ago 2012)",
      "3º Congreso Argentino de Pediatría (2006) y Curso de Pediatría Práctica"
    ],
    "Gestión y Otros": [
      "15° Jornadas Científicas y de Gestión Hospital El Cruce (Oct 2022)",
      "12° Jornadas Científicas y de Gestión (Oct 2019)",
      "Capacitación en Sistema de Gestión Documental Electrónica (Mayo 2023)",
      "Capacitación para implementación de Sistema de Gestión de Calidad (2015)",
      "Curso de Búsqueda de Información Biomédica (2015)"
    ]
  },
  
  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Francés", nivel: "Avanzado" },
    { idioma: "Inglés", nivel: "Básico" }
  ],
  
  informatica: "Office II Intermedio"
};

// --- COMPONENTES UI ---

const SectionHeader = ({ title, subtitle, align = "center", light = false }) => (
  <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <h3 className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-3 ${light ? "text-[#A1887F]" : "text-[#8D6E63]"}`}>
      {subtitle}
    </h3>
    <h2 className={`text-3xl md:text-4xl font-serif leading-tight ${light ? "text-white" : "text-[#3E2723]"}`}>
      {title}
    </h2>
    {/* Línea decorativa en Marrón Claro */}
    <div className={`h-1 w-20 md:w-24 bg-[#8D6E63] mt-4 md:mt-6 ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`p-6 md:p-8 rounded-sm border border-[#3E2723]/10 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// --- SECCIONES ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const emailLink = `mailto:${DATA.contacto.email}?subject=Solicitud%20de%20Turno&body=Hola%20Dra.%20Altamirano,%20quisiera%20solicitar%20un%20turno.`;

  return (
    // Fondo Beige
    <nav className="bg-[#F5F2EB] border-b border-[#3E2723]/10 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Icono en Marrón Chocolate */}
          <div className="bg-[#3E2723] p-2 rounded-md text-white shadow-sm">
            <Activity size={20} />
          </div>
          <div>
            <span className="text-lg md:text-xl font-serif text-[#3E2723] block leading-none">Dra. Altamirano</span>
            <span className="text-[10px] text-[#5D4037] uppercase tracking-widest">Pediatría & Intensiva</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-[#5D4037]">
          {['Inicio', 'Perfil', 'Servicios', 'Trayectoria', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#3E2723] transition">{item}</a>
          ))}
        </div>
        
        {/* Botón Marrón Claro */}
        <a 
          href={emailLink}
          className="hidden md:block bg-[#5D4037] text-[#F5F2EB] px-6 py-2.5 text-sm font-bold hover:bg-[#3E2723] transition rounded-sm shadow-sm"
        >
          Pedir Turno
        </a>

        <button className="md:hidden text-[#3E2723] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F2EB] border-t border-[#3E2723]/10 absolute w-full left-0 top-full shadow-xl z-50 animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {['Inicio', 'Perfil', 'Servicios', 'Trayectoria', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-[#3E2723] font-medium text-lg border-b border-[#3E2723]/10 pb-2"
              >
                {item}
              </a>
            ))}
            <a 
              href={emailLink} 
              className="bg-[#5D4037] text-white text-center py-3 rounded font-medium mt-4 font-bold"
            >
               Pedir Turno (Email)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const emailLink = `mailto:${DATA.contacto.email}?subject=Solicitud%20de%20Turno&body=Hola%20Dra.%20Altamirano,%20quisiera%20solicitar%20un%20turno.`;

  return (
    // Fondo Beige Principal (#F5F2EB)
    <section id="inicio" className="relative bg-[#F5F2EB] text-[#3E2723] min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-0">
      
      {/* Fondo Abstracto */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#EBE6DC] skew-x-12 translate-x-20 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D7CCC8]/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center mt-0 md:-mt-32 pb-20 md:pb-0">
        
        {/* Columna Izquierda */}
        <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#3E2723]/20 rounded-full bg-white/50 text-[#5D4037] text-xs font-bold tracking-widest uppercase">
            <Star size={12} /> Excelencia Médica
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif leading-tight text-[#3E2723]">
            Cuidando el futuro <br/>
            <span className="text-[#8D6E63] italic">con dedicación.</span>
          </h1>
          
          <div className="relative max-w-lg mx-auto md:mx-0">
            {/* Comilla decorativa */}
            <span className="hidden md:block absolute -top-4 -left-2 text-6xl text-[#D6D0C0] font-serif">"</span>
            <p className="text-[#5D4037] text-base md:text-lg leading-relaxed md:border-l-2 md:border-[#8D6E63] md:pl-6 font-light italic">
              Soy responsable, empática y dedicada. Mi labor se basa en la <strong className="text-[#3E2723] font-normal">honestidad</strong> y el trabajo en equipo, impulsada siempre por el deseo de prosperar académicamente para brindar lo mejor a mis pacientes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            {/* Botón Marrón Claro */}
            <a 
              href={emailLink}
              className="bg-[#5D4037] hover:bg-[#3E2723] text-[#F5F2EB] font-bold px-8 py-4 text-center transition shadow-lg rounded-sm hover:-translate-y-1 transform duration-300"
            >
              Agendar Consulta
            </a>
            <a href="#trayectoria" className="border border-[#3E2723]/30 hover:bg-white hover:text-[#3E2723] text-[#5D4037] px-8 py-4 text-center font-medium transition rounded-sm">
              Ver Credenciales
            </a>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta de Perfil */}
        <div className="flex justify-center md:justify-end">
          {/* Fondo semitransparente blanco */}
          <div className="relative bg-white/70 backdrop-blur-md border border-white/80 p-6 md:p-12 max-w-md w-full rounded-sm shadow-xl">
            {/* Detalles decorativos en Marrón */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-[#8D6E63] rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-[#8D6E63] rounded-bl-3xl"></div>
            
            <h3 className="text-[#8D6E63] text-xs md:text-sm font-bold tracking-widest uppercase mb-2">Perfil Profesional</h3>
            <h2 className="text-2xl md:text-3xl font-serif text-[#3E2723] mb-6">Dra. Noelia Altamirano</h2>
            
            <ul className="space-y-4 text-[#5D4037] text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Activity className="shrink-0 text-[#8D6E63] mt-1" size={20} />
                <span>Médica de Planta Hospital El Cruce (Alta Complejidad)</span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="shrink-0 text-[#8D6E63] mt-1" size={20} />
                <span>Especialista en Clínica Pediátrica (Col. Médicos / Min. Salud)</span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCap className="shrink-0 text-[#8D6E63] mt-1" size={20} />
                <span>Egresada U.N.L.P (2004)</span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-[#3E2723]/10 flex justify-end items-center">
               <div className="flex items-center gap-2 text-[#8D6E63] text-xs uppercase tracking-widest">
                  <span>Verificado</span>
                  <ShieldCheck className="text-[#5D4037]" size={24} />
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <a href="#perfil" className="text-[#8D6E63] hover:text-[#3E2723] transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

const About = () => (
  <section id="perfil" className="py-16 md:py-24 bg-[#FDFCF8]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader subtitle="Filosofía de Trabajo" title="Vocación, Empatía y Rigor Científico" />
        
        <div className="bg-white p-6 md:p-10 shadow-xl shadow-stone-200/50 border-t-4 border-[#3E2723] rounded-sm">
          <div className="flex flex-col md:flex-row gap-10 items-start">
             <div className="flex-1">
                <p className="text-base md:text-lg text-[#5D4037] leading-relaxed font-serif italic mb-6">
                  "{DATA.perfil}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {['Responsabilidad', 'Empatía', 'Honestidad', 'Dedicación', 'Trabajo en Equipo', 'Superación'].map(skill => (
                    <div key={skill} className="flex items-center gap-2 text-[#3E2723] font-medium text-sm">
                      <div className="w-2 h-2 bg-[#8D6E63] rounded-full"></div> {skill}
                    </div>
                  ))}
                </div>
             </div>
             <div className="md:w-1/3 w-full bg-[#F5F2EB] p-6 rounded border border-[#3E2723]/10">
                <h4 className="font-bold text-[#3E2723] mb-4 flex items-center gap-2">
                  <Languages size={18} className="text-[#8D6E63]" /> Idiomas
                </h4>
                <ul className="space-y-3 text-sm text-[#5D4037] mb-6">
                  {DATA.idiomas.map((idioma, idx) => (
                    <li key={idx} className="flex justify-between border-b border-[#3E2723]/10 pb-2 last:border-0 last:pb-0">
                      <span>{idioma.idioma}</span>
                      <span className="font-bold text-[#3E2723]">{idioma.nivel}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-bold text-[#3E2723] mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
                  <FileText size={14} className="text-[#8D6E63]" /> Informática
                </h4>
                <p className="text-sm text-[#5D4037]">{DATA.informatica}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicios" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeader subtitle="Áreas de Atención" title="Cuidado Integral de la Salud Infantil" />
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="bg-[#F9F7F4] border-t-4 border-t-[#8D6E63]">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-[#3E2723] shadow-sm border border-[#3E2723]/10">
            <Activity size={28} />
          </div>
          <h3 className="text-xl font-serif text-[#3E2723] font-bold mb-3">Alta Complejidad & Urgencias</h3>
          <p className="text-[#5D4037] text-sm mb-4">
            Gracias a mi formación en <strong>Terapia Intensiva (SATI)</strong> y experiencia en el Hospital El Cruce, brindo un manejo experto de patologías agudas y crónicas.
          </p>
        </Card>

        {/* Card 2 - Centro destacado (Marrón Chocolate) */}
        <Card className="bg-[#3E2723] text-white border-none transform md:-translate-y-4 shadow-2xl">
          <div className="w-14 h-14 bg-[#5D4037] rounded-full flex items-center justify-center mb-6 text-[#F5F2EB]">
            <Baby size={28} />
          </div>
          <h3 className="text-xl font-serif text-white font-bold mb-3">Pediatría General & Niño Sano</h3>
          <p className="text-[#D7CCC8] text-sm mb-4">
            Control exhaustivo de crecimiento y desarrollo. Vacunación, alimentación y pautas de crianza desde el nacimiento.
          </p>
          <ul className="text-sm space-y-2 text-[#D7CCC8]">
            <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#8D6E63]"/> Control de percentilos</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#8D6E63]"/> Desarrollo madurativo</li>
          </ul>
        </Card>

        {/* Card 3 */}
        <Card className="bg-[#F9F7F4] border-t-4 border-t-[#8D6E63]">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-[#3E2723] shadow-sm border border-[#3E2723]/10">
            <HeartHandshake size={28} />
          </div>
          <h3 className="text-xl font-serif text-[#3E2723] font-bold mb-3">Adolescencia & Especialidades</h3>
          <p className="text-[#5D4037] text-sm mb-4">
            Abordaje específico de la salud adolescente y áreas complementarias como dermatología y prevención de obesidad.
          </p>
          <ul className="text-sm space-y-2 text-[#5D4037]">
            <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#8D6E63]"/> Prevención Suicidio Adolescente</li>
            <li className="flex items-center gap-2"><ChevronRight size={14} className="text-[#8D6E63]"/> Dermatología Infantil (HNRG)</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section id="trayectoria" className="py-16 md:py-24 bg-[#F5F2EB]">
    <div className="container mx-auto px-6 max-w-6xl">
      <SectionHeader subtitle="Currículum Vitae" title="Trayectoria Académica y Laboral" />
      
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-12">
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-[#3E2723] mb-8 pb-4 border-b border-[#3E2723]/20">
              <Stethoscope className="text-[#8D6E63]" /> Experiencia Profesional
            </h3>
            <div className="space-y-8 border-l-2 border-[#3E2723]/20 ml-2 md:ml-3 pl-6 md:pl-8 relative">
              {DATA.experiencia.map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 md:w-5 md:h-5 bg-[#3E2723] rounded-full border-4 border-[#F5F2EB]"></span>
                  <span className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">{item.periodo}</span>
                  <h4 className="text-lg font-bold text-[#3E2723] mt-1">{item.rol}</h4>
                  <p className="text-[#5D4037] font-medium text-sm">{item.lugar}</p>
                  <p className="text-[#8D6E63] text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-[#3E2723] mb-8 pb-4 border-b border-[#3E2723]/20">
              <GraduationCap className="text-[#8D6E63]" /> Formación Académica
            </h3>
            <div className="space-y-6">
              {DATA.formacion.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded shadow-sm border-l-4 border-[#3E2723]">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-2">
                     <h4 className="font-bold text-[#3E2723] text-lg leading-tight">{item.titulo}</h4>
                     <span className="text-xs bg-[#F5F2EB] px-3 py-1 rounded-full text-[#5D4037] font-mono whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="text-[#5D4037] font-medium text-sm">{item.institucion}</p>
                  {item.nota && <p className="text-[#8D6E63] text-xs mt-2 font-medium italic border-t border-[#F5F2EB] pt-2">{item.nota}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div>
          <h3 className="flex items-center gap-3 text-xl font-bold text-[#3E2723] mb-8 pb-4 border-b border-[#3E2723]/20">
            <BookOpen className="text-[#8D6E63]" /> Cursos y Actualizaciones
          </h3>
          
          <div className="grid gap-6">
            {Object.entries(DATA.cursosCategorizados).map(([categoria, cursos], idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow-sm border border-[#3E2723]/10 hover:border-[#8D6E63] transition">
                <h4 className="font-bold text-[#3E2723] mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                  <Award size={16} className="text-[#8D6E63]" /> {categoria}
                </h4>
                <ul className="space-y-3">
                  {cursos.map((curso, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#5D4037] leading-snug">
                       <span className="text-[#8D6E63] mt-1.5 text-[8px]">●</span>
                       <span>{curso}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Footer = () => {
  const emailLink = `mailto:${DATA.contacto.email}?subject=Solicitud%20de%20Turno&body=Hola%20Dra.%20Altamirano,%20quisiera%20solicitar%20un%20turno.`;

  return (
    <footer id="contacto" className="bg-[#3E2723] text-white pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-[#5D4037] pb-12">
        
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#5D4037] p-2 rounded text-[#F5F2EB]">
              <Activity size={24} />
            </div>
            <span className="text-2xl font-serif">Dra. Noelia Altamirano</span>
          </div>
          <p className="text-[#D7CCC8] leading-relaxed max-w-md mb-6">
            Atención pediátrica integral con el respaldo de años de experiencia en cuidados críticos. Su tranquilidad es mi prioridad.
          </p>
        </div>

        <div>
          <h4 className="text-[#8D6E63] font-bold uppercase tracking-widest text-sm mb-6">Contacto</h4>
          <ul className="space-y-4 text-[#D7CCC8]">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#8D6E63]"/> 
              <a href="tel:+5491163657651" className="hover:text-white transition">
                {DATA.contacto.telefono}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#8D6E63]"/> 
              <a href={`mailto:${DATA.contacto.email}`} className="hover:text-white transition">
                  {DATA.contacto.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#8D6E63] mt-1"/> 
              <span>{DATA.contacto.direccion}<br/><span className="text-xs text-[#A1887F]">Consultorio Particular & Clínica del Niño</span></span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#8D6E63] font-bold uppercase tracking-widest text-sm mb-6">Horarios</h4>
          <ul className="space-y-3 text-[#D7CCC8] text-sm">
            <li className="flex justify-between border-b border-[#5D4037] pb-2">
              <span>Lunes - Viernes</span>
              <span>Consultar</span>
            </li>
            <li className="flex justify-between border-b border-[#5D4037] pb-2">
              <span>Sábados</span>
              <span>Consultar</span>
            </li>
          </ul>
          
          <a 
            href={emailLink}
            className="w-full mt-6 bg-[#5D4037] hover:bg-[#8D6E63] text-[#F5F2EB] py-3 rounded-sm font-medium transition text-sm flex justify-center items-center gap-2 shadow-lg font-bold"
          >
             <Mail size={18} /> Solicitar Turno por Email
          </a>
        </div>
      </div>
      
      <div className="text-center text-[#A1887F] text-xs">
        <p>&copy; {new Date().getFullYear()} Dra. Noelia Altamirano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="font-sans antialiased text-[#3E2723] bg-[#F5F2EB] selection:bg-[#D7CCC8] selection:text-[#3E2723]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;