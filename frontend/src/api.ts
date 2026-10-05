export const api = {
  async create(fd:FormData){ const r=await fetch('/api/analyses',{method:'POST',body:fd}); if(!r.ok) throw new Error(await r.text()); return r.json(); },
  async get(id:string){ const r=await fetch(`/api/analyses/${id}`); if(!r.ok) throw new Error('Analysis not found'); return r.json(); },
  async history(){ const r=await fetch('/api/analyses'); return r.json(); },
  async rerun(id:string,perspective:string){ const r=await fetch(`/api/analyses/${id}/perspectives/${encodeURIComponent(perspective)}/rerun`,{method:'POST'}); if(!r.ok) throw new Error(await r.text()); return r.json(); },
  async wireframes(id:string,scenarioId:string){ const r=await fetch(`/api/analyses/${id}/scenarios/${scenarioId}/wireframes`,{method:'POST'}); if(!r.ok) throw new Error(await r.text()); return r.json(); }
};
