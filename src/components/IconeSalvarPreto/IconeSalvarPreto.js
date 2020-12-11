import React from 'react'
import "./IconeSalvarPreto.css"


export function IconeSalvarPreto (props) {
	return <div className={'icon-container'}>
		<img width="25" height="25" className={"img"} alt={'Icone'} src={props.salvar} onClick={props.onClickSalvarIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
