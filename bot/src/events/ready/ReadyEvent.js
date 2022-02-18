const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
    client.abchlog = await client.channels.fetch("944167908584620052", true, true)
    console.log(client.abchlog)
  }
}