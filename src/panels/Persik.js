import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import connect from '@vkontakte/vk-connect';
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const Persik = props => {
	const [fetchedEmail, setEmail] = useState(null);
	const [fetchedPhone, setPhone] = useState(null);
	const [sharedType, setShared] = useState(null);
	const [emailFetched, setEmailFetched] = useState(false);
	const [phoneFetched, setPhoneFetched] = useState(false);
	const [linkShared, setLinkShared] = useState(false);
	useEffect(() => {
		async function fetchData() {
			let getEmailResult = null;
			try {
				getEmailResult = await connect.sendPromise('VKWebAppGetEmail');
				setEmailFetched(true);
			} catch (e) {
				//getEmailResult = 'запретил'
			}
			setEmail(getEmailResult ? getEmailResult.email : 'Не удалось получить');

			let getPhoneNumberResult = null;
			try {
				getPhoneNumberResult = await connect.sendPromise('VKWebAppGetPhoneNumber');
				setPhoneFetched(true);
			} catch (e) {
				//getEmailResult = 'запретил'
			}
			setPhone(getPhoneNumberResult ? getPhoneNumberResult.phone_number : 'Не удалось получить');

			let appShareResult = null;
			try {
				appShareResult = await connect.sendPromise('VKWebAppShare');
				setLinkShared(true);
			} catch (e) {
				//getEmailResult = 'запретил'
			}
			setShared(appShareResult ? 'Тип: ' + appShareResult.type : 'Отказался');
		}
		fetchData();
	}, []);

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<HeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				</HeaderButton>}
			>
				Persik
			</PanelHeader>
			<Group title="e-mail"><Div>{fetchedEmail == null ? <PanelSpinner /> : fetchedEmail}</Div></Group>
			<Group title="phone"><Div>{fetchedPhone == null ? <PanelSpinner /> : fetchedPhone}</Div></Group>
			<Group title="Share"><Div>{sharedType == null ? <PanelSpinner /> : sharedType}</Div></Group>
			<Div>{emailFetched && phoneFetched && linkShared ? <img className="Persik" src={persik} alt="Persik The Cat" /> : 'Что бы увидеть Персика разрешите доступ к телефону, почте и поделитесь ссылкой'}</Div>
		</Panel>
	);
}

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
