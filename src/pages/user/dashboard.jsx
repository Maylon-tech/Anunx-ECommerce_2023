import Card from '@/src/components/card/Card'
import TemplateDefault from '@/src/templates/Default'
import { AiFillEdit } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs' 
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
        
        <GridContainer>
        
          <Card 
            image="https://i.pinimg.com/236x/ff/56/3a/ff563aa49a238d3b6e97733e55e74bb3.jpg"
            title="Produto 01"
            subtitle="$60.00"
            actions={
              <>
                <ButtonEdit>
                  <AiFillEdit />
                  Editar
                </ButtonEdit>
                <ButtonRemove>
                  <BsTrash3Fill />
                  Remover
                </ButtonRemove>
              </>
            }
          />
    
          <Card 
            image="https://i.pinimg.com/236x/07/d9/7a/07d97a2b1ab79f646345eee708509fd3.jpg"
            title="Produto 02"
            subtitle="$60.00"
            actions={
              <>
                <ButtonEdit>
                  <AiFillEdit />
                  Editar
                </ButtonEdit>
                <ButtonRemove>
                  <BsTrash3Fill />
                  Remover
                </ButtonRemove>
              </>
            }
          />
    
          <Card 
            image="https://i.pinimg.com/236x/ff/56/3a/ff563aa49a238d3b6e97733e55e74bb3.jpg"
            title="Produto 03"
            subtitle="$60.00"
            actions={
              <>
                <ButtonEdit>
                  <AiFillEdit />
                  Editar
                </ButtonEdit>
                <ButtonRemove>
                  <BsTrash3Fill />
                  Remover
                </ButtonRemove>
              </>
            }
          />
  
        </GridContainer>
      </Container>

    </TemplateDefault>
  )
}

export default Dashboard