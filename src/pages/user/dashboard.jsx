import Card from '@/src/components/card'
import TemplateDefault from '@/src/templates/Default'

import { 
  ButtonEdit,
  ButtonRemove,
  Container, 
  GridContainer, 
  PublicarBtn, 
  Title, 
} from '@/styles/dashboard'

const Dashboard = () => {
  return (
    <TemplateDefault>
      
      <Container>
        <Title>Meus Anuncios</Title>
        <PublicarBtn>Publicar Novos Anuncios</PublicarBtn>
      </Container>

      <GridContainer>
      
        <Card 
          image="https://i.pinimg.com/236x/ff/56/3a/ff563aa49a238d3b6e97733e55e74bb3.jpg"
          title="Produto 01"
          subtitle="$60.00"
          actions={
            <>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Remover</ButtonRemove>
            </>
          }
        />
  
        <Card 
          image="https://i.pinimg.com/236x/07/d9/7a/07d97a2b1ab79f646345eee708509fd3.jpg"
          title="Produto 02"
          subtitle="$60.00"
          actions={
            <>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Remover</ButtonRemove>
            </>
          }
        />
  
        <Card 
          image="https://i.pinimg.com/236x/ff/56/3a/ff563aa49a238d3b6e97733e55e74bb3.jpg"
          title="Produto 03"
          subtitle="$60.00"
          actions={
            <>
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonRemove>Remover</ButtonRemove>
            </>
          }
        />

      </GridContainer>
    </TemplateDefault>
  )
}

export default Dashboard