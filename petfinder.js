const pf = new petfinder.Client({apiKey: "Ffp95Z7LgdOT3M4VIpZ76EUSXpJ18mwxzlVpTJPidyCnfaoHoD", secret: "NJn7fkEiddhwL72ZC0N28GYczmZtLuvCuDR8pztj"});


pf.organization.search({location: "11201", distance: "5"})
  .then(resp => {
    resp.data.organizations.forEach((orgs)=>{
        console.log(orgs);
    })
  })
  .catch(err=>{
      console.log(err);
  })
  
