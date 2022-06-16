export default {
    name:'project',
    title:'ProjectName',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Project Name',
            type:'string',
            description:'Name Of Project',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                 maxLength:100,
            }

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
            description:'enter project details'
        }
    ]

}