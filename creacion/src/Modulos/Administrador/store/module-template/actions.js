import ContenidoApi from "@/Api Axios/Axios";

export const AñadirEntrada=async({commit},entrada) =>{
    
    const {name,descripcion,id,git,img,video}=entrada;
    const newEntry = {name,descripcion,git,id,img,video}
    const {data} = await ContenidoApi.post(`/contenidoPortafolio.json`,newEntry)
    newEntry.id=data.name;
    commit('addentry', newEntry)
    console.log(data.name)
    return data.name
}

export const QuitarEntrada=async({commit},id) =>{
    await ContenidoApi.delete(`/contenidoPortafolio/${id}.json`)
    commit('deleteEntry', id)
}

export const Editarentrada=async({commit},entrada) =>{

    const {name,descripcion,id,git,img,video}=entrada;
    const newEntry = {name,descripcion,git,id,img,video};
    await ContenidoApi.put(`/contenidoPortafolio/${newEntry.id}.json`,newEntry)
    commit('updateEntry', {...newEntry})

}