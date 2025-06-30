function FindProxyForURL(url, host)
{
// Route WebMD traffic to SYSPROXY for OpenEnrollment
	if (
		shExpMatch(host, "*.subimo.com") ||
		shExpMatch(host, "*.webmdhealth.com") ||
		shExpMatch(host, "*.webmd.com") ||
		shExpMatch(host, "*.flagstonelogistics.com") ||
		shExpMatch(host, "consortiumcontact.com") ||
		shExpMatch(host, "*.consortiumcontact.com") ||
		shExpMatch(host, "*.delmarlearning.com") ||	
		shExpMatch(host, "*.cspnet.com") ||
		shExpMatch(host, "*.accurint.com") ||
		shExpMatch(host, "*.loopnet.com") ||
		shExpMatch(host, "*.dhs.ca.gov") ||
		shExpMatch(host, "*.evocoworkspace.com") ||
		shExpMatch(host, "*.bldgportal.com") ||
		shExpMatch(host, "*.epropertytax.com") ||
		shExpMatch(host, "*.epropertytax.info")
	)
	return "PROXY sysproxy.wal-mart.com:8080";
	

//Allow sites to go direct without proxy request
	if (
		dnsDomainIs(host, ".prod.walmart.com") ||
		dnsDomainIs(host, "cld.samsclub.com") ||
		dnsDomainIs(host, ".local") ||
		dnsDomainIs(host, ".qa.walmart.com") ||
		dnsDomainIs(host, ".cloud.walmart.com") ||
		dnsDomainIs(host, "rugged.walmart.com") ||
		dnsDomainIs(host, "ruggedadmin.walmart.com") ||
		dnsDomainIs(host, "certrugged.walmart.com") ||
		dnsDomainIs(host, "certruggedadmin.walmart.com") ||
		dnsDomainIs(host, "portal.walmartbenefits.com") ||
		dnsDomainIs(host, "pfedprod.walmartbenefits.com") ||
		dnsDomainIs(host, "vdi.hayneedle.com") ||
		dnsDomainIs(host, "vdis1.hayneedle.com") ||
		dnsDomainIs(host, "vdis2.hayneedle.com") ||
		dnsDomainIs(host, "sso.walmartone.com") || // New CDC Egress rollout
		shExpMatch (host, "service-payment.walmart.ca") ||
		shExpMatch (host, "qa-service-payment.walmart.ca") ||
		shExpMatch (host, "edit.boxlocalhost.com") ||    
		shExpMatch (host, "netstudio.hayneedle.com") ||    
		shExpMatch (host, "zoom*.zoom.us") ||
		shExpMatch (host, "zoom*.zoom.com.cn") ||
		shExpMatch (host, "zoom*.zoomgov.com") ||	
		shExpMatch (host, "prod.ebs.hayneedle.com") ||
		shExpMatch (host, "*.wvd.microsoft.com") ||
		dnsDomainIs(host, "wirefly.com") ||
		dnsDomainIs(host, "inphonic.com") ||
		dnsDomainIs(host, "walmart.evips.com") ||
		dnsDomainIs(host, "walmartssrs.evips.com") ||
		dnsDomainIs(host, "wmestatus.evips.com") ||
		dnsDomainIs(host, "code42.com") ||
		dnsDomainIs(host, "crashplan.com") ||
		dnsDomainIs(host, "trayapp.smartcorp.net") ||
		dnsDomainIs(host, "corp.dom") || 
		dnsDomainIs(host, "update.microsoft.com")||
                dnsDomainIs(host, "adl.windows.com") ||
                dnsDomainIs(host, "tsfe.trafficshaping.dsp.mp.microsoft.com") ||
                dnsDomainIs(host, "manage.microsoft.com") ||
                dnsDomainIs(host, "naprodimedatapri.azureedge.net") ||
                dnsDomainIs(host, "naprodimedatasec.azureedge.net") ||
                dnsDomainIs(host, "naprodimedatahotfix.azureedge.net") ||
                dnsDomainIs(host, "emdl.ws.microsoft.com") ||
                dnsDomainIs(host, "windowsupdate.com") ||
                dnsDomainIs(host, "delivery.mp.microsoft.com") ||
                dnsDomainIs(host, "do.dsp.mp.microsoft.com") ||
                dnsDomainIs(host, "officecdn.microsoft.com") ||
                dnsDomainIs(host, "officecdn.microsoft.com.edgesuite.net") ||
		shExpMatch (host, "*.apple-cloudkit.com") ||
		dnsDomainIs(host, "lcdn-locator.apple.com") ||
		dnsDomainIs(host, "serverstatus.apple.com") ||
		dnsDomainIs(host, "prf-prod.sap.asda.uk") ||
		dnsDomainIs(host, "vrf-stag.sap.asda.uk") ||
		dnsDomainIs(host, "rh.centralfill.teluspharmacy.com") ||
		dnsDomainIs(host, "library.walmart.com") ||
		dnsDomainIs(host, "discovery.lucidlink.com") ||
		dnsDomainIs(host, "app.iconik.io") ||
		dnsDomainIs(host, "us.iconik.io")  ||
                dnsDomainIs(host, "walmart.videomanager.exc.motorolasolutions.com")
	)
	return "DIRECT" ;


//IP check for domains split between internal and external accessible sites
	if	(
		dnsDomainIs(host, "walmart.com") ||
		dnsDomainIs(host, "samsclub.com") ||
		dnsDomainIs(host, "asda.com") ||
		dnsDomainIs(host, "member-ally.com") ||
		dnsDomainIs( host, "appserviceenvironment.net") ||
		dnsDomainIs( host, "cellstores.com") ||
		dnsDomainIs( host, "simplexity.com")
	) {
		resolved_ip = dnsResolve(host);	
			if	(
				isInNet   (resolved_ip, "161.165.150.0", "255.255.254.0") ||
				isInNet   (resolved_ip, "161.167.142.0", "255.255.255.0") ||
				isInNet   (resolved_ip, "161.167.252.0", "255.255.255.0") ||
				isInNet   (resolved_ip, "161.170.230.0", "255.255.254.0") ||
				isInNet   (resolved_ip, "161.170.232.0", "255.255.254.0") ||
				isInNet   (resolved_ip, "161.170.238.0", "255.255.254.0") ||
				isInNet   (resolved_ip, "161.170.240.0", "255.255.252.0") ||
				isInNet   (resolved_ip, "161.170.244.0", "255.255.252.0") ||
				isInNet   (resolved_ip, "161.170.248.0", "255.255.252.0") ||
				shExpMatch(host, "cap-project.walmart.com") ||
				shExpMatch(host, "beacon.walmart.com") ||
				shExpMatch(host, "wrd.walmart.com") ||
				shExpMatch(host, "fusion.walmart.com") ||
				shExpMatch(host, "wireless.walmart.com")
			) 
			return "PROXY proxy-intlho.wal-mart.com:8080"; 
			
			//This section was from the False Root Elimination Pac
			if (
				isInNet(resolved_ip, "7.0.0.0",  "255.0.0.0") ||
				isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "21.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "22.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "28.0.0.0", "254.0.0.0") ||
				isInNet(resolved_ip, "29.0.0.0", "254.0.0.0") ||
				isInNet(resolved_ip, "30.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "55.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "127.0.0.0", "255.0.0.0") ||
				isInNet(resolved_ip, "142.136.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "146.132.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "148.250.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "156.84.0.0", "255.252.0.0") ||
				isInNet(resolved_ip, "156.88.0.0", "255.248.0.0") ||
				isInNet(resolved_ip, "161.163.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "161.164.0.0", "255.252.0.0") ||
				isInNet(resolved_ip, "161.165.213.0", "255.255.255.0") ||
				isInNet(resolved_ip, "161.168.0.0", "255.248.0.0") ||
				isInNet(resolved_ip, "161.176.0.0", "255.252.0.0") ||
				isInNet(resolved_ip, "169.254.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "172.16.0.0", "255.240.0.0") ||
				isInNet(resolved_ip, "172.32.0.0", "255.255.0.0") ||
				isInNet(resolved_ip, "161.170.204.0", "255.255.252.0") ||
				isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
				isPlainHostName(host)
		)
			return "DIRECT";
			
		else
			return "PROXY proxy-intlho.wal-mart.com:8080";
	}
	
//For Jet Azure
	if	(
		dnsDomainIs(host, "jet.computer") ||
		dnsDomainIs(host, "notjet.net") ||
		dnsDomainIs(host, "jet.network")
	) {
		resolved_jet_ip = dnsResolve(host);	
			if (
				isInNet(resolved_jet_ip, "10.0.0.0", "255.0.0.0") ||
				isInNet(resolved_jet_ip, "172.16.0.0", "255.240.0.0") ||
				isInNet(resolved_jet_ip, "192.168.0.0", "255.255.0.0") ||
				isPlainHostName(host)
		)
			return "DIRECT";
		else
			return "PROXY proxy-intlho.wal-mart.com:8080";
	}	
	
// Ensure access to site even if becomes resolvable one day
// until we know what external IPs Seiyu might own.
	if (
		shExpMatch (host, "www.seiyu.co.jp") || 
		shExpMatch (host, "multimeter.walmart.com") || 
		shExpMatch (host, "www.walmart.com") ||
		shExpMatch (host, "cdn.retaillink.com") ||
		shExpMatch (host, "cdn.certretaillink.com") ||
		shExpMatch (host, "www.samsclub.com") ||
		shExpMatch (host, "digitalcoupons.walmart.com") ||
		shExpMatch (host, "qa.samsclub.com") ||
		shExpMatch (host, "staging.samsclub.com") ||
		shExpMatch (host, "ca.samsclub.com") ||
		shExpMatch (host, "uk.asda.com") ||
		shExpMatch (host, "api.walmartlabs.com") ||
		shExpMatch (host, "developer.walmartlabs.com") || 
		shExpMatch (host, "www-stage.asda.com") ||
		shExpMatch (host, "www.asda.com") ||
		shExpMatch (host, "direct.asda.com") ||
		shExpMatch (host, "your.asda.com") ||
		shExpMatch (host, "avocadotraining.walmart.com") || 
		shExpMatch (host, "wwwtraining.walmart.com") || 
		shExpMatch (host, "*.walmart.ca") ||
		shExpMatch (host, "printcenter.samsclub.com") ||
		shExpMatch (host, "www-e*.walmart.com") ||
		shExpMatch (host, "pressroom.samsclub.com") || 
		shExpMatch (host, "www2.samsclub.com") ||
		shExpMatch (host, "rfi-walmart.com") ||
		shExpMatch (host, "161.169.79.10") ||
		shExpMatch (host, "www.walmartlabs.com") ||
		shExpMatch (host, "group.samsclub.com") || 
		shExpMatch (host, "benestg.wal-mart.com") ||
		shExpMatch (host, "securestg.wal-mart.com") ||
		shExpMatch (host, "portalstg.wal-mart.com") ||
		shExpMatch (host, "reviews.samsclub.com") ||  
		shExpMatch (host, "i.walmart.com") ||
		dnsDomainIs(host, "associatebrand.walmart.com")
	)
	return "PROXY proxy-intlho.wal-mart.com:8080";

//Proxy-1dc section removed from here. Not needed for Anycast VIP

// Ensure that these Citrix apps go through Port 8096
// for longer timeout on the CSS
	if (
		shExpMatch(host, "*.wellpoint.com") ||
		shExpMatch(host, "*.bcbsar.com") ||
		shExpMatch(host, "ctxapps.travelocity.com") ||
		shExpMatch(host, "*topaz.at-hand.net*") ||
		shExpMatch(host, "*starsasp.com") ||
		shExpMatch(host, "*.flightapps.com") ||
		shExpMatch(host, "*.boardvantage.com") ||
		shExpMatch(host, "*mintec.is") ||
		shExpMatch(host, "*mintecis.is") ||
		shExpMatch(host, "*.broadsystem.com") ||
		shExpMatch(host, "*.fairisaac.com") ||
		shExpMatch(host, "*.nielsen.com") ||
		shExpMatch(host, "rcs.srs.rrd.com") ||
		shExpMatch(host, "walmart.asdaaspect.com") ||
		shExpMatch(host, "men.srs.rrd.com") ||
		shExpMatch(host, "*webexconnect.com") ||
		shExpMatch(host, "at-hand.net") ||
		shExpMatch(host, "*.csstars.eu") ||
		shExpMatch(host, "walmartcitrix.tbiztravel.com") ||
		shExpMatch(host, "*help.walmart.com*") ||
		shExpMatch(host, "teamworks.ivieinc.com") ||
		shExpMatch(host, "24.155.190.197") ||
		shExpMatch(host, "162.27.10.214")
	)
	return "PROXY proxy-intlho.wal-mart.com:8096";

	if (
		shExpMatch (host, "*riskconsole.com") ||
		shExpMatch (host, "*accertify.net") ||
		shExpMatch (host, "*aonesolutions.us") ||
		shExpMatch (host, "*asp8.shared.asp.corptax.com*") ||
		shExpMatch (host, "*.enviance.com") ||
		shExpMatch (host, "*.fuelquest.com") ||
		shExpMatch (host, "*.deloitte.com") ||  	
		shExpMatch (host, "*integrilinkportal.com")
	)
	return "PROXY proxy-rmis.wal-mart.com:8097";


// Financial division websites
// added 167.6.232.101 (Navistar) on 03/29/2006 cc 1713521
// added evalue.navistar.com (Navistar) on 04/05/2006 cc 1719269
//         for transportation team  wrlow
// added 206.201.50.81 on 04/24/2006 cc 1731868 
//         for NE team  wrlow
// added 161.170.144.225 (Apex Analytix) on 06/28/2006 cc 1767692
	if (
		dnsDomainIs(host, "retaillink.wal-mart.com") ||
		dnsDomainIs(host, "aws.aws.neteps.com") ||
		dnsDomainIs(host, "161.170.144.91") ||
		dnsDomainIs(host, "63.98.137.136") ||
		dnsDomainIs(host, "204.194.127.3") ||
		dnsDomainIs(host, "204.194.136.27") ||
		dnsDomainIs(host, "204.194.136.28") ||
		dnsDomainIs(host, "167.6.232.101") ||
		dnsDomainIs(host, "198.181.234.62") ||
		dnsDomainIs(host, "206.201.50.81") ||
		dnsDomainIs(host, "206.201.50.82") ||
		dnsDomainIs(host, "206.201.50.83") ||
		dnsDomainIs(host, "206.201.50.84") ||
		dnsDomainIs(host, "206.201.50.181") ||
		dnsDomainIs(host, "206.201.50.182") ||
		dnsDomainIs(host, "206.201.50.183") ||
		dnsDomainIs(host, "206.201.50.184") ||
		dnsDomainIs(host, "206.201.53.122") ||
		dnsDomainIs(host, "206.201.53.222") ||
		dnsDomainIs(host, "139.61.234.224") ||
		shExpMatch (host, "161.165.194.45") ||
		shExpMatch (host, "161.165.193.39") ||
		shExpMatch (host, "161.165.200.51") ||   
		shExpMatch (host, "www.wal-martchina.com") ||
		shExpMatch (host, "host45.agsdc.net") ||
		shExpMatch (host, "host46.agsdc.net") ||
		shExpMatch (host, "thevault.telescopeondemand.com") ||
		shExpMatch (host, "216.239.243.45") ||
		shExpMatch (host, "74.126.86.46") ||
		shExpMatch (host, "64.57.222.82") ||
		shExpMatch (host, "*.disputestsys.com") ||
		shExpMatch (host, "www.samsclub.com.cn") || 
		shExpMatch (host, "ltp.wal-martchina.com") ||
		shExpMatch (host, "*retaillink.com") ||
		shExpMatch (host, "*retaillinkapps.com") ||
		shExpMatch (host, "iepsc.fairisaac.com") || 
		dnsDomainIs(host, "apex.wal-mart.com") ||
		shExpMatch (host, "apex") ||
		shExpMatch (host, "161.170.144.225") ||   
		shExpMatch (host, "client*.medco.com") ||
		shExpMatch (host, "*.walmartlabs.com") ||
		dnsDomainIs(host, "stratacareservices1.net") ||
		shExpMatch (host, "assessments.walmartstores.com") ||
		shExpMatch (host, "fimstage.walmartone.com") ||
		shExpMatch (host, "hiringcenter.walmartstores.com") ||
		shExpMatch (host, "walmartus1.crosscap.com") ||
		shExpMatch (host, "walmartca1.crosscap.com") ||
		shExpMatch (host, "139.61.234.226") ||
		shExpMatch (host, "walmartuat.acsgs.com") ||
		shExpMatch (host, "walmartuatsvc.acsgs.com") ||
		shExpMatch (host, "walmartsvc.acsgs.com") ||
		shExpMatch (host, "walmart.acsgs.com") ||
		shExpMatch (host, "wlmrt.acsgs.com") ||
		shExpMatch (host, "walmartuat-cwas.portal.conduent.com") ||
		shExpMatch (host, "walmart-cwas.portal.conduent.com") ||
		shExpMatch (host, "walmartds-cwas.portal.conduent.com") ||
		shExpMatch (host, "walmartvs-cwas.portal.conduent.com") ||
		shExpMatch (host, "china.valuelink.biz") ||
		shExpMatch (host, "solutions.medco.com") ||
		shExpMatch (host, "cws.medco.com") ||
		shExpMatch (host, "expadvisor.medco.com") ||
		shExpMatch (host, "fimprodext.walmartone.com") ||
		shExpMatch (host, "fimprodext.walmartbenefits.com") ||
		shExpMatch (host, "*gwfp.walmartone.com") ||
		shExpMatch (host, "client.medco.com") ||
		shExpMatch (host, "wmt-ctx.gehealthcare.com") ||
		shExpMatch (host, "asp-federation-services.gehealthcare.com") ||
		shExpMatch (host, "wmlabdaq.us.wal-mart.com") ||
		dnsDomainIs(host, "billreview.stratacare.net") ||
		dnsDomainIs(host, "clientline.myconcordefs.com") ||
		dnsDomainIs(host, "imagefortress.wal-mart.com") ||
		dnsDomainIs(host, "reporting.myconcordefs.com") ||
		dnsDomainIs(host, "selectrx01.emdeon.com") ||
		shExpMatch (host, "170.138.32.228") ||
		shExpMatch (host, "170.138.32.76") ||
		dnsDomainIs(host, "pod51077.outlook.com") ||
		dnsDomainIs(host, "fss.wmtmerch.com") ||
		dnsDomainIs(host, "169.254.169.254") ||
		dnsDomainIs(host, "walmart.mail.onmicrosoft.com") ||
		dnsDomainIs(host, "homeoffice.wal-mart.com") ||
		dnsDomainIs(host, "outlook.wal-mart.com") ||
		shExpMatch (host, "*.national.ncrs.nhs.uk") ||
		dnsDomainIs(host, "walmart.net") ||
		shExpMatch (host, "autodiscover.*.wal-mart.com") || 
		dnsDomainIs(host, "ramp-demo.multicast-receiver-altitudecdn.net") ||
		shExpMatch (host, "55.254.0.0") ||	//Jet Hoboken cutover
		shExpMatch (host, "55.254.0.1") ||	//Jet Hoboken cutover
		shExpMatch (host, "55.254.0.2") ||	//Jet Hoboken cutover
		shExpMatch (host, "55.254.0.3")	||	//Jet Hoboken cutover
		dnsDomainIs(host, "scigw.scot.nhs.uk") ||
		dnsDomainIs(host, "mhs.scot.nhs.uk") ||
		dnsDomainIs(host, "doceditor.wrike.com")
	)
	return "DIRECT" ;


   // sites that might be internal so require DNS lookup
   // Passthrough
	else if(
		isInNet    (host, "7.0.0.0",     "255.0.0.0") ||
		isInNet    (host, "10.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "21.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "22.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "28.0.0.0",    "254.0.0.0") ||
		isInNet    (host, "29.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "30.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "55.0.0.0",    "255.0.0.0") ||
		isInNet    (host, "127.0.0.0",   "255.0.0.0") ||
		isInNet    (host, "135.0.0.0",   "255.0.0.0") ||
		isInNet    (host, "146.132.0.0", "255.255.0.0") ||
		isInNet    (host, "148.250.0.0", "255.255.0.0") ||
		isInNet	   (host, "156.84.0.0",  "255.252.0.0") ||
		isInNet    (host, "156.88.0.0",  "255.248.0.0") ||
		isInNet    (host, "156.95.0.0",  "255.255.0.0") ||
		isInNet    (host, "169.254.0.0", "255.255.0.0") ||
		isInNet    (host, "172.16.0.0",  "255.240.0.0") ||
		isInNet    (host, "172.32.0.0",  "255.225.0.0") ||
		isInNet    (host, "192.168.0.0", "255.255.0.0") ||
		// Jandy Studio Azure Blob Storage
		isInNet    (host, "4.236.141.87",     "255.255.255.255") ||
		isInNet    (host, "20.163.175.224",     "255.255.255.255") ||
		isInNet    (host, "64.23.198.70",     "255.255.255.255") ||
		isInNet    (host, "146.190.175.127",     "255.255.255.255") ||
		// End Jandy Studio Azure Blob Storage
		shExpMatch (host, "161.17*.*.*") ||
		shExpMatch (host, "161.16*.*.*") ||
		shExpMatch (host, "*.s0*.us") ||
		shExpMatch (host, "*.s0*.ca") ||
		isPlainHostName(host) ||
		dnsDomainIs(host, "wal-mart.com") ||
		dnsDomainIs(host, "wal-martchina.com") ||
		dnsDomainIs(host, "mywalmart.com") ||
		dnsDomainIs(host, ".wal-mart.com") ||
		dnsDomainIs(host, "samsclub.com") ||
		dnsDomainIs(host, ".samsclub.com") ||
		dnsDomainIs(host, ".walmart.ca") ||
		dnsDomainIs(host, ".asda.com") ||
		dnsDomainIs(host, "walmart.com") ||
		dnsDomainIs(host, ".walmart.com") ||
		dnsDomainIs(host, "homeoffice.wal-mart.com") ||
		dnsDomainIs(host, ".bhartiretail.in") ||
		dnsDomainIs(host, ".homeoffice.wal-mart.com")  ||
		dnsDomainIs(host, ".seiyu.co.jp") ||
		dnsDomainIs(host, ".starsasp.com") ||
		dnsDomainIs(host, ".starsinfo.com") ||
		dnsDomainIs(host, ".cloudapp.azure.com")
	)
	{ 
		if(
			isResolvable(host) 
		)
		ipstr = dnsResolve(host) ;
		
		else
			ipstr = "146.132.234.1" ; 
		// force it through PassThrough
		if(
			isInNet(ipstr, "146.132.234.0", "255.255.255.0") ||
			isInNet(ipstr, "209.10.214.0",  "255.255.255.0") ||
			isInNet(ipstr, "161.168.214.0", "255.255.255.0") ||
			isInNet(ipstr, "209.202.128.0", "255.255.255.0") ||
			isInNet(ipstr, "216.251.114.0", "255.255.255.0") ||
			isInNet(ipstr, "216.251.251.0", "255.255.255.0") ||
			isInNet(ipstr, "66.135.222.0",  "255.255.255.0") ||
			isInNet(ipstr, "66.211.178.0",  "255.255.255.0") ||
			isInNet(ipstr, "161.170.254.0", "255.255.255.0") ||
			isInNet(ipstr, "161.170.236.0", "255.255.252.0") ||
			isInNet(ipstr, "204.235.124.0", "255.255.252.0")	
		)
		return "PROXY proxy-intlho.wal-mart.com:8080" ;

		else
		return "DIRECT" ;
	}

// Universal
	else
	return "PROXY proxy-intlho.wal-mart.com:8080" ;
}
