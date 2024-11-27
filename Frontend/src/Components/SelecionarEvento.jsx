import {CaixaSelecionarEvento,DivSelecionarEvento, TextoSelecionarEvento, LogoSelecionarEvento, PselecionarEvento, H1SelecionarEvento, BtnSelecionarEvento} from '../Styles/SelecionarEvento'
import imgSelecionarEvento from '../imgs/imgSelecionarEvento.jpg'
import ModalBtn from './Modal'

const Header = () => {
    return(
        <CaixaSelecionarEvento>
            <DivSelecionarEvento>
            <H1SelecionarEvento>O PODER DA DECISÃO</H1SelecionarEvento>

            <PselecionarEvento>Detelhamento:</PselecionarEvento>

            <TextoSelecionarEvento>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.                                                               
            </TextoSelecionarEvento> 

             <ModalBtn/>
           
            </DivSelecionarEvento>
             <LogoSelecionarEvento src={imgSelecionarEvento}/>

        </CaixaSelecionarEvento>
    )
}

export default Header

