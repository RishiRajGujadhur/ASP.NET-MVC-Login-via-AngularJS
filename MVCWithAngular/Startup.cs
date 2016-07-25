using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCWithAngular.Startup))]
namespace MVCWithAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
