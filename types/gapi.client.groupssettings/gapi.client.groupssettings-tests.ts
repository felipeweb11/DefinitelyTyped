/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('groupssettings', 'v1', () => {
        /** now we can use gapi.client.groupssettings */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage the settings of a G Suite group */
            'https://www.googleapis.com/auth/apps.groups.settings',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Gets one resource by id. */
        await gapi.client.groups.get({
            groupUniqueId: "groupUniqueId",
        });
        /** Updates an existing resource. This method supports patch semantics. */
        await gapi.client.groups.patch({
            groupUniqueId: "groupUniqueId",
        });
        /** Updates an existing resource. */
        await gapi.client.groups.update({
            groupUniqueId: "groupUniqueId",
        });
    }
});
