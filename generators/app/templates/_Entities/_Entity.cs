using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VitCorp.Model {
    public class <%= name %> : IEntityBase
    {
        public <%= name %>() {
            // Initialize
        }

        [Key]
        public string Id { get; set; }
<% for(var i=0; i<attrs.length; i++) { -%>
        public string <%= attrs[i] %> { get; set; }
<% } -%>
    }
}
