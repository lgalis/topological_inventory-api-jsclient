/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.0.1
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Source model module.
* @module model/Source
* @version 0.0.1
*/
export default class Source {
    /**
    * Constructs a new <code>Source</code>.
    * @alias module:model/Source
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Source} obj Optional instance to populate.
    * @return {module:model/Source} The populated <code>Source</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('source_type_id')) {
                obj['source_type_id'] = ApiClient.convertToType(data['source_type_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} source_type_id
    */
    source_type_id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} uid
    */
    uid = undefined;
    /**
    * @member {String} tenant_id
    */
    tenant_id = undefined;








}


