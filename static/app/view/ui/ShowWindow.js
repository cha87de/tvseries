/*
 * File: app/view/ui/ShowWindow.js
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TvSeries.view.ui.ShowWindow', {
    extend: 'Ext.window.Window',

    height: 513,
    width: 956,
    layout: {
        type: 'border'
    },
    closeAction: 'hide',
    title: 'Episode anzeigen',
    modal: true,
    closeAction: 'hide',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    width: 300,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    region: 'west',
                    split: true,
                    items: [
                        {
                            xtype: 'form',
                            border: 0,
                            height: 240,
                            id: 'infoPanel',
                            width: 300,
                            bodyPadding: 10,
                            flex: 1,
                            items: [
                                {
                                    xtype: 'displayfield',
                                    name: 'SerialTitle',
                                    value: 'Display Field',
                                    fieldLabel: 'Serie',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'SeasonTitle',
                                    value: 'Display Field',
                                    fieldLabel: 'Staffel',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'EpisodeTitle',
                                    value: 'Display Field',
                                    fieldLabel: 'Episode',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    name: 'EpisodePremier',
                                    value: 'Display Field',
                                    fieldLabel: 'Ausstrahlung',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'availability',
                                    fieldLabel: 'Verfügbarkeit',
                                    editable: false,
                                    displayField: 'name',
                                    store: 'availabilitystore',
                                    valueField: 'idAvailability',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'displayfield',
                                    height: 200,
                                    width: 300,
                                    name: 'EpisodeAbout',
                                    value: 'Display Field',
                                    fieldLabel: '',
                                    anchor: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            border: 0,
                            id: 'BroadcastTimeGrid',
                            store: 'BroadcastTime',
                            flex: 1,
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'channel',
                                    text: 'Sender'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'time',
                                    text: 'Sendezeit'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'Titel'
                                }
                            ],
                            viewConfig: {

                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    border: 0,
                    region: 'center',
                    weight: 333,
                    items: [
                        {
                            xtype: 'panel',
                            height: 480,
                            html: '<embed type=\"application/x-vlc-plugin\" name=\"videoplayer\" height=\"300\" width=\"500\" autoplay=\"no\" loop=\"no\" target=\"\" />',
                            id: 'theatre',
                            width: 640
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
