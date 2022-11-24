function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
    bgcolor="danger"
    txtcolor="black"
    header={(<h3>All Data</h3>)}
    body= {JSON.stringify(ctx)}
    />
  );
}