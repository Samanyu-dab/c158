AFRAME.registerComponent("tour",{
    init:function(){
        this.placesContainer=this.el
        this.createCard()
    },
    createCard:function(){
        const Thumbnailref=[
            {
                id:"taj-mahal",
                title:"Taj Mahal",
                url:"../assets/thumbnails/taj_mahal.png"
                
            },
            {
                id:"budapest",
                title:"Budapest",
                url:"../assets/thumbnails/budapest.jpg"
            },
            {
                id:"newyork",
                title:"New York",
                url:"../assets/thumbnails/new_york_city.png"
            },
            {
                id:"eiffel-tower",
                title:"Eiffel Tower",
                url:"../assets/thumbnails/eiffel_tower.jpg"
            },
        
        ]
        let previousxPosition=-40
        for(var item of Thumbnailref){
            const posx=previousxPosition+25
            const posy=10
            const posz=-40
            const position={x:posx,y:posy,z:posz}
            previousxPosition=posx
            const borderEl=this.createBorder(position,item.id)
            const thumbnail=this.createThumbnail(item)
            borderEl.appendChild(thumbnail)

            const TitleEl=this.createtitleEl(position,item)
            borderEl.appendChild(TitleEl)
            this.placesContainer.appendChild(borderEl)

        }
    },
        createBorder:function(position,id){
            const EntityEl=document.createElement("a-entity")
            EntityEl.setAttribute("id",id)
            EntityEl.setAttribute("visible",true)
            EntityEl.setAttribute("geometry",{
                primitive:"ring",
                radiusInner:9,
                radiusOuter:10
            })
            EntityEl.setAttribute("position",position)
            EntityEl.setAttribute("material",{
                color:"#0077cc",
                opacity:1
            })
            return EntityEl
        },
        createtitleEl:function(position,item){
            const entityEl=document.createElement("a-entity")
            entityEl.setAttribute("text",{
                font:"exo2bold",
                align:"center",
                width:70,
                color:"#e65100",
                value:item.title
            })
            const elPosition=position
            elPosition.y=-20
            entityEl.setAttribute("position",elPosition)
            entityEl.setAttribute("visible",true)
            return entityEl

            
        },
        createThumbnail:function(item){
            const entityEl=document.createElement("a-entity")
            entityEl.setAttribute("visible",true)
            entityEl.setAttribute("geometry",{
              primitive:"circle",
              radius:9,

            })
            entityEl.setAttribute("material",{
                src:item.url
            })
            return entityEl

        }

        
    
})