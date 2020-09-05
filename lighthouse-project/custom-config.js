'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer',
			'card-load-gatherer',
        ]
    }],

    audits: [
        'card-audit',
		'card-api'
    ],

    categories: {
        ratp_pwa: {
			title: 'My ratp pwa metrics',
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            auditRefs: [
                {id: 'card-audit', weight: 1},
				{id: 'card-api', weight: 1},
            ]
        }
    }
};