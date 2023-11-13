


const xml2js = require("xml2js");
const parser = new xml2js.Parser({explicitArray: false});

describe("xml parsing",()=>{
     const xmlPayload=" 	<id>0</id> 	<Category> 		<id>0</id> 		<name>ttjimmo</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
     let petid=null
     it("creating PET",()=>{
          cy.request(
               
               {
                    method:"POST",
                    url:"https://petstore.swagger.io/v2/pet",
                    body:xmlPayload,
                    headers:{"Content-Type":"application/xml",
                             "accept":"application"}   
               })
               .then((response)=>{
                    expect(response.status).to.eq(200);
                    parser.parseString(response.body,err,(result)=>{
                           petid=result.pet.id;

                    })   

               })

      it("Fetching Pet data-parsing xml responseET",()=>{
          cy.request(
                         
              {
                    method:"GET",
                    url:"https://petstore.swagger.io/v2/pet",
                    headers:{"Content-Type":"application/xml"}   
               })
               .then((response)=>{
                    expect(response.status).to.eq(200);
                    parser.parseString(response.body,err,(result)=>{
                           expect(result.pet.id).equal(petid);
                           expect(result.pet.name).equal("ttjimmo")
          
                              })   
          
                         })
                
          
          
          
          
          

     })

     })



})