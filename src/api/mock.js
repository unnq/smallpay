// Super tiny in-memory store for demo purposes
const state = {
businesses: [
{ slug:'demo-landscaping', name:'Green Leaf Landscaping', tagline:'Long Beach & Lakewood' }
],
services: [
{ id:'svc1', slug:'demo-landscaping', title:'Front yard mow', price:60, description:'Weekly or bi-weekly.' },
{ id:'svc2', slug:'demo-landscaping', title:'Full yard service', price:120, description:'Mow, edge, trim, blow.' }
],
bookings: [
{ id:'b1', slug:'demo-landscaping', date:'2025-02-12', time:'09:00', serviceTitle:'Front yard mow', customerName:'Alex Kim', status:'Confirmed' }
]
}


export const getBusinessBySlug = (slug) => state.businesses.find(b=>b.slug===slug)
export const getServicesBySlug = (slug) => state.services.filter(s=>s.slug===slug)
export const listServices = (slug) => state.services.filter(s=>s.slug===slug)
export const createService = (slug, data) => {
const id = 'svc' + Math.random().toString(36).slice(2,7)
state.services.push({ id, slug, ...data });
}
export const deleteService = (id) => {
const idx = state.services.findIndex(s=>s.id===id)
if(idx>=0) state.services.splice(idx,1)
}
export const listBookings = (slug) => state.bookings.filter(b=>b.slug===slug)
