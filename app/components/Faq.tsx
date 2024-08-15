import Toggle from "./Toggle";

const Faq = ({ title }: { title: string }) => {
	return (
		<Toggle title={title}>
			<div className="question">
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero at
						cumque quaerat laudantium veritatis totam illo nemo recusandae qui
						labore!
					</p>
				</div>
			</div>
		</Toggle>
	);
};

export default Faq;
