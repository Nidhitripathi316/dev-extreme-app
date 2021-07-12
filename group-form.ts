export const FormItems=[
    {
    Caption:"Personal Detail",
    ItemType:"group",
    Items: [{
        dataField:"FirstName",
        EditorType:"dxSelectBox"
        },
        {
            dataField:"LastName",
            editorType:"dxSelectBox"
        },
        {
            dataField:"BirthDate",
            editorType:"dxDateBox"
        }
    ]

},
   
    
{
            Caption:"Contact Detail",
            ItemType:"group",
            Items:[
                {
                    dataField:"Address",
                    editorType:"dxSelectBox"
                },
                {
                    dataField:"Phone",
                    editorType:"dxSelectBox"
                },
                {
                    dataField:"Email",
                    editorType:"dxSelectBox"
                }
            ]
        }
        
]