// import {MdPerson as icon} from 'react-icons/md';
export default {
    name:'life',
    title:'Life',
    type:'document',
    // icon,
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            description:'describe about picture',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:'description',
            title:'Description',
            type:'text',
            description:'enter their details'
        }
    ]
}