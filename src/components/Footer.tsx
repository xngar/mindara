export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-bold text-slate-800">Mindara</div>
          <div className="flex gap-4">
            {/* <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">link</span>
            </a> */}
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 hover:text-purple-500 text-sm hover:underline underline-offset-4" href="#">Privacidad</a>
          <a className="text-slate-500 hover:text-purple-500 text-sm hover:underline underline-offset-4" href="#">Términos</a>
          <a className="text-slate-500 hover:text-purple-500 text-sm hover:underline underline-offset-4" href="#">Blog</a>
          <a className="text-slate-500 hover:text-purple-500 text-sm hover:underline underline-offset-4" href="#">FAQs</a>
        </div> */}
        <p className="font-['Inter'] text-sm text-slate-500">© 2026 Mindara. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
