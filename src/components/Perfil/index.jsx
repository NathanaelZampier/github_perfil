import styles from './Perfil.module.css';



const Perfil = ({nomeUsuario}) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.className}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;

//export default function()
//export default () => {}
