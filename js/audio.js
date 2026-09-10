Zuxcyn.audioTracks=[];
function importAudio(file){const url=URL.createObjectURL(file);Zuxcyn.audioTracks.push({name:file.name,type:file.type,size:file.size,url});toast("Audio ditambahkan")}
function createAudioInput(){const input=document.createElement("input");input.type="file";input.accept="audio/*";input.onchange=()=>input.files[0]&&importAudio(input.files[0]);input.click()}
window.importAudio=importAudio;window.createAudioInput=createAudioInput;
