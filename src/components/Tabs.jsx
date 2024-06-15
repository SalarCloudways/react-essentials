export default function Tabs({ children, buttons, ButtonsContainer = "menu" }){
    // const ButtonContainer = buttonsContainer; No mapping needed if prop starts with capital letter
    return( 
    <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        { children }
    </>
    )
}