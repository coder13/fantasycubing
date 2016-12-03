const app = require('ampersand-app');
const React = require('react');

module.exports = React.createClass({
	getInitialState () {
		return {
			value: ''
		};
	},

	change (event) {
		this.setState({value: event.target.value});

		if (this.props.onChange) {
			this.props.onChange(event.target.value)
		}
	},

	render () {
		let {value} = this.state;

		return (
			<select name='region' id='region' className='form-control' {...this.props} onChange={this.change} value={value}>
				<option value='all'>All regions</option>
				<optgroup label='Continent'>
					<option value='_Africa'>Africa</option>
					<option value='_Asia'>Asia</option>
					<option value='_Europe'>Europe</option>
					<option value='_North America'>North America</option>
					<option value='_Oceania'>Oceania</option>
					<option value='_South America'>South America</option>
				</optgroup>
				<optgroup label='Country'>
					<option value='Afghanistan'>Afghanistan</option>
					<option value='Albania'>Albania</option>
					<option value='Algeria'>Algeria</option>
					<option value='Andorra'>Andorra</option>
					<option value='Angola'>Angola</option>
					<option value='Anguilla'>Anguilla</option>
					<option value='Antigua'>Antigua & Barbuda</option>
					<option value='Argentina'>Argentina</option>
					<option value='Armenia'>Armenia</option>
					<option value='Aruba'>Aruba</option>
					<option value='Australia'>Australia</option>
					<option value='Austria'>Austria</option>
					<option value='Azerbaijan'>Azerbaijan</option>
					<option value='Bahamas'>Bahamas</option>
					<option value='Bahrain'>Bahrain</option>
					<option value='Bangladesh'>Bangladesh</option>
					<option value='Barbados'>Barbados</option>
					<option value='Belarus'>Belarus</option>
					<option value='Belgium'>Belgium</option>
					<option value='Belize'>Belize</option>
					<option value='Benin'>Benin</option>
					<option value='Bhutan'>Bhutan</option>
					<option value='Bolivia'>Bolivia</option>
					<option value='Bosnia and Herzegovina'>Bosnia & Herzegovina</option>
					<option value='Botswana'>Botswana</option>
					<option value='Brazil'>Brazil</option>
					<option value='British Virgin Islands'>British Virgin Islands</option>
					<option value='Brunei'>Brunei</option>
					<option value='Bulgaria'>Bulgaria</option>
					<option value='Burkina Faso'>Burkina Faso</option>
					<option value='Cambodia'>Cambodia</option>
					<option value='Cameroon'>Cameroon</option>
					<option value='Canada'>Canada</option>
					<option value='Central African Republic'>Central African Republic</option>
					<option value='Chad'>Chad</option>
					<option value='Chile'>Chile</option>
					<option value='China'>China</option>
					<option value='Colombia'>Colombia</option>
					<option value='Comoros'>Comoros</option>
					<option value='Congo'>Congo - Brazzaville</option>
					<option value='DR Congo'>Congo - Kinshasa</option>
					<option value='Cook Islands'>Cook Islands</option>
					<option value='Costa Rica'>Costa Rica</option>
					<option value='Cote d_Ivoire'>Côte d’Ivoire</option>
					<option value='Croatia'>Croatia</option>
					<option value='Cuba'>Cuba</option>
					<option value='Cyprus'>Cyprus</option>
					<option value='Czech Republic'>Czech Republic</option>
					<option value='Denmark'>Denmark</option>
					<option value='Djibouti'>Djibouti</option>
					<option value='Dominica'>Dominica</option>
					<option value='Dominican Republic'>Dominican Republic</option>
					<option value='Ecuador'>Ecuador</option>
					<option value='Egypt'>Egypt</option>
					<option value='El Salvador'>El Salvador</option>
					<option value='Equatorial Guinea'>Equatorial Guinea</option>
					<option value='Eritrea'>Eritrea</option>
					<option value='Estonia'>Estonia</option>
					<option value='Ethiopia'>Ethiopia</option>
					<option value='Fiji'>Fiji</option>
					<option value='Finland'>Finland</option>
					<option value='France'>France</option>
					<option value='French Guiana'>French Guiana</option>
					<option value='French Polynesia'>French Polynesia</option>
					<option value='Gabon'>Gabon</option>
					<option value='Gambia'>Gambia</option>
					<option value='Georgia'>Georgia</option>
					<option value='Germany'>Germany</option>
					<option value='Ghana'>Ghana</option>
					<option value='Greece'>Greece</option>
					<option value='Grenada'>Grenada</option>
					<option value='Guatemala'>Guatemala</option>
					<option value='Guernsey'>Guernsey</option>
					<option value='Guinea'>Guinea</option>
					<option value='Guyana'>Guyana</option>
					<option value='Haiti'>Haiti</option>
					<option value='Honduras'>Honduras</option>
					<option value='Hong Kong'>Hong Kong</option>
					<option value='Hungary'>Hungary</option>
					<option value='Iceland'>Iceland</option>
					<option value='India'>India</option>
					<option value='Indonesia'>Indonesia</option>
					<option value='Iran'>Iran</option>
					<option value='Iraq'>Iraq</option>
					<option value='Ireland'>Ireland</option>
					<option value='Isle of Man'>Isle of Man</option>
					<option value='Israel'>Israel</option>
					<option value='Italy'>Italy</option>
					<option value='Jamaica'>Jamaica</option>
					<option value='Japan'>Japan</option>
					<option value='Jordan'>Jordan</option>
					<option value='Kazakhstan'>Kazakhstan</option>
					<option value='Kenya'>Kenya</option>
					<option value='Kiribati'>Kiribati</option>
					<option value='Korea'>Korea</option>
					<option value='Kosovo'>Kosovo</option>
					<option value='Kuwait'>Kuwait</option>
					<option value='Laos'>Laos</option>
					<option value='Latvia'>Latvia</option>
					<option value='Lebanon'>Lebanon</option>
					<option value='Lesotho'>Lesotho</option>
					<option value='Liberia'>Liberia</option>
					<option value='Libya'>Libya</option>
					<option value='Liechtenstein'>Liechtenstein</option>
					<option value='Lithuania'>Lithuania</option>
					<option value='Luxembourg'>Luxembourg</option>
					<option value='Macau'>Macao</option>
					<option value='Macedonia'>Macedonia</option>
					<option value='Madagascar'>Madagascar</option>
					<option value='Malawi'>Malawi</option>
					<option value='Malaysia'>Malaysia</option>
					<option value='Mali'>Mali</option>
					<option value='Malta'>Malta</option>
					<option value='Marshall Islands'>Marshall Islands</option>
					<option value='Mauritania'>Mauritania</option>
					<option value='Mauritius'>Mauritius</option>
					<option value='Mayotte'>Mayotte</option>
					<option value='Mexico'>Mexico</option>
					<option value='Moldova'>Moldova</option>
					<option value='Monaco'>Monaco</option>
					<option value='Mongolia'>Mongolia</option>
					<option value='Montenegro'>Montenegro</option>
					<option value='Morocco'>Morocco</option>
					<option value='Mozambique'>Mozambique</option>
					<option value='XA'>Multiple Countries (Asia)</option>
					<option value='XE'>Multiple Countries (Europe)</option>
					<option value='XS'>Multiple Countries (South America)</option>
					<option value='Myanmar'>Myanmar (Burma)</option>
					<option value='Namibia'>Namibia</option>
					<option value='Nauru'>Nauru</option>
					<option value='Nepal'>Nepal</option>
					<option value='Netherlands'>Netherlands</option>
					<option value='New Caledonia'>New Caledonia</option>
					<option value='New Zealand'>New Zealand</option>
					<option value='Nicaragua'>Nicaragua</option>
					<option value='Niger'>Niger</option>
					<option value='Nigeria'>Nigeria</option>
					<option value='Niue'>Niue</option>
					<option value='North Korea'>North Korea</option>
					<option value='Norway'>Norway</option>
					<option value='Oman'>Oman</option>
					<option value='Pakistan'>Pakistan</option>
					<option value='Palestine'>Palestinian Territories</option>
					<option value='Panama'>Panama</option>
					<option value='Papua New Guinea'>Papua New Guinea</option>
					<option value='Paraguay'>Paraguay</option>
					<option value='Peru'>Peru</option>
					<option value='Philippines'>Philippines</option>
					<option value='Pitcairn Islands'>Pitcairn Islands</option>
					<option value='Poland'>Poland</option>
					<option value='Portugal'>Portugal</option>
					<option value='Puerto Rico'>Puerto Rico</option>
					<option value='Qatar'>Qatar</option>
					<option value='Romania'>Romania</option>
					<option value='Russia'>Russia</option>
					<option value='Samoa'>Samoa</option>
					<option value='San Marino'>San Marino</option>
					<option value='Sao Tome and Principe'>São Tomé & Príncipe</option>
					<option value='Saudi Arabia'>Saudi Arabia</option>
					<option value='Senegal'>Senegal</option>
					<option value='Serbia'>Serbia</option>
					<option value='Sierra Leone'>Sierra Leone</option>
					<option value='Singapore'>Singapore</option>
					<option value='Slovakia'>Slovakia</option>
					<option value='Slovenia'>Slovenia</option>
					<option value='Solomon Islands'>Solomon Islands</option>
					<option value='Somalia'>Somalia</option>
					<option value='South Africa'>South Africa</option>
					<option value='South Sudan'>South Sudan</option>
					<option value='Spain'>Spain</option>
					<option value='Sri Lanka'>Sri Lanka</option>
					<option value='Saint Kitts and Nevis'>St. Kitts & Nevis</option>
					<option value='Saint Lucia'>St. Lucia</option>
					<option value='Saint Vincent and the Grenadines'>St. Vincent & Grenadines</option>
					<option value='Sudan'>Sudan</option>
					<option value='Suriname'>Suriname</option>
					<option value='Swaziland'>Swaziland</option>
					<option value='Sweden'>Sweden</option>
					<option value='Switzerland'>Switzerland</option>
					<option value='Syria'>Syria</option>
					<option value='Taiwan'>Taiwan</option>
					<option value='Tanzania'>Tanzania</option>
					<option value='Thailand'>Thailand</option>
					<option value='Togo'>Togo</option>
					<option value='Tonga'>Tonga</option>
					<option value='Trinidad and Tobago'>Trinidad & Tobago</option>
					<option value='Tunisia'>Tunisia</option>
					<option value='Turkey'>Turkey</option>
					<option value='Turks and Caicos Islands'>Turks & Caicos Islands</option>
					<option value='Tuvalu'>Tuvalu</option>
					<option value='Uganda'>Uganda</option>
					<option value='Ukraine'>Ukraine</option>
					<option value='United Arab Emirates'>United Arab Emirates</option>
					<option value='United Kingdom'>United Kingdom</option>
					<option value='USA'>United States</option>
					<option value='Uruguay'>Uruguay</option>
					<option value='Uzbekistan'>Uzbekistan</option>
					<option value='Vanuatu'>Vanuatu</option>
					<option value='Venezuela'>Venezuela</option>
					<option value='Vietnam'>Vietnam</option>
					<option value='Yemen'>Yemen</option>
					<option value='Zambia'>Zambia</option>
					<option value='Zimbabwe'>Zimbabwe</option>
				</optgroup>
			</select>
		)
	}
});