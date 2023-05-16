//import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<FormInput
						//inputLabel="Nome completo"
						//labelFor="name"
						//inputType="text"
						//inputId="name"
						//inputName="name"
						//placeholderText="Seu nome"
						//ariaLabelName="Name"
					/>
					<FormInput
						//inputLabel="Email"
						//labelFor="email"
						//inputType="email"
						//inputId="email"
						//inputName="email"
						//placeholderText="Seu email"
						//ariaLabelName="Email"
					/>
					<FormInput
						//inputLabel="Assunto"
						//labelFor="subject"
						//inputType="text"
						//inputId="subject"
						//inputName="subject"
						//placeholderText="Assunto"
						//ariaLabelName="Subject"
					/>

					<div className="font-general-medium">
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
