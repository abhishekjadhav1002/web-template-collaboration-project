
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "../components/FooterStyle";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Shop</Heading>
						<FooterLink href="#">
							Gift Guides
						</FooterLink>
						<FooterLink href="#">
							Fan Art
						</FooterLink>
						<FooterLink href="#">
							New Works
						</FooterLink>
						<FooterLink href="#">
							Blog
						</FooterLink>
					</Column>
					<Column>
						<Heading>About</Heading>
						<FooterLink href="/">
							Home
						</FooterLink>
						<FooterLink href="/about">
							About Us
						</FooterLink>
						<FooterLink href="#">
							Social Responsibility
						</FooterLink>
						<FooterLink href="#">
							Sell Your Art
						</FooterLink>
						<FooterLink href="#">
							Artist Blog
						</FooterLink>
					</Column>
					<Column>
						<Heading>Help</Heading>
						<FooterLink href="#">
					         Delivery
						</FooterLink>
						<FooterLink href="#">
							Returns
						</FooterLink>
						<FooterLink href="#">
							Help Center
						</FooterLink>
						<FooterLink href="/profile">
							Contact Us
						</FooterLink>
						<FooterLink href="#">
							Guidelines
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
		
	);
};
export default Footer;
