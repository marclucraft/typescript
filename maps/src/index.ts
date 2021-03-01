/// <reference types="@types/googlemaps" />

import { User } from './User';
import { Company } from './Company';

new google.maps.Map(document.getElementById('map'), {
	zoom: 10,
	center: {
		lat: 0,
		lng: 0,
	},
});
