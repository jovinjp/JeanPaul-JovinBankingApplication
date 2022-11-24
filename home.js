function Home(){
  return (
    <Card
      bgcolor="danger"
      txtcolor="black"
      header={(<h3>Welcome to Bad Bank</h3>)}
      title="JOVIN Federal Credit Union"
      text="A non-FDIC bank holding company and financial services corporation based in Philadelphia, Pennsylvania."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /> 
  );  
}