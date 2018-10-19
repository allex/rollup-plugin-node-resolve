import Client from 'isomorphic-object-with-false';
import Foo from 'foo-by-alias';

// do some assert

assert.deepEqual(new Client('ws:'), { name: 'websocket-tracker' })

// expose
export default Foo;
