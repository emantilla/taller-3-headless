'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: 'card-api',
            title: 'Cart api',
            category: 'MyPerformance',
            name: 'card-api',
            description: 'Respuesta del primmer llamado del api',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
                ' card is shown.',
            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;